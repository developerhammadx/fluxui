import { NextResponse } from "next/server";
import { getPostById, getAllPosts } from "@/lib/data/posts";

export const dynamic = "force-static";

// Generate static params for all posts
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post = getPostById(id);
    
    if (!post) {
      return NextResponse.json({
        success: false,
        error: "Post not found",
        message: `No post found with ID: ${id}`
      }, {
        status: 404
      });
    }
    
    return NextResponse.json({
      success: true,
      data: post
    }, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Failed to fetch post",
      message: error instanceof Error ? error.message : "Unknown error"
    }, {
      status: 500
    });
  }
}
