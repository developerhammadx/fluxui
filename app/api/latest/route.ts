import { NextResponse } from "next/server";
import { getLatestPosts } from "@/lib/data/posts";

export const dynamic = "force-static";

export async function GET() {
  try {
    const posts = getLatestPosts(5);
    
    return NextResponse.json({
      success: true,
      count: posts.length,
      data: posts
    }, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=1800" // Cache for 30 minutes
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Failed to fetch latest posts",
      message: error instanceof Error ? error.message : "Unknown error"
    }, {
      status: 500
    });
  }
}
