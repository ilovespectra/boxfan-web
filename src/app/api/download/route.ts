import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Download from GitHub raw content
    const githubUrl = 'https://raw.githubusercontent.com/ilovespectra/BoxFan/main/releases/BoxFan.apk';
    
    console.log('Fetching APK from:', githubUrl);
    const response = await fetch(githubUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; BoxFan/1.0)',
      },
    });
    
    console.log('GitHub response status:', response.status);
    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    console.log('APK downloaded, size:', buffer.byteLength);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="BoxFan.apk"',
        'Content-Length': buffer.byteLength.toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to download APK', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
