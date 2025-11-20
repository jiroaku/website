import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string; image: string }> }
) {
  const { slug, image } = await params;
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');
  const imagePath = path.join(postsDirectory, slug, image);

  // Security: prevent directory traversal
  const resolvedPath = path.resolve(imagePath);
  const resolvedPostsDir = path.resolve(postsDirectory);

  if (!resolvedPath.startsWith(resolvedPostsDir)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  if (!fs.existsSync(imagePath)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const ext = path.extname(image).toLowerCase();

    let contentType = 'image/jpeg';
    if (ext === '.png') contentType = 'image/png';
    else if (ext === '.gif') contentType = 'image/gif';
    else if (ext === '.webp') contentType = 'image/webp';
    else if (ext === '.svg') contentType = 'image/svg+xml';

    // Get file stats to use for cache validation
    const stats = fs.statSync(imagePath);
    const etag = `"${stats.mtime.getTime()}-${stats.size}"`;

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, must-revalidate',
        'ETag': etag,
        'Last-Modified': stats.mtime.toUTCString(),
      },
    });
  } catch (error) {
    console.error('Error serving blog image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

