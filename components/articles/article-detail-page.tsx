import { Prisma } from "@/generated/prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LikeButton from "./like-button";
import CommentList from "./comments/comment-list";
import CommentInput from "./comments/comment-input";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { ArticlesNavbar } from "./articles-navbar";

type ArticleDetailPageProps = {
  article: Prisma.ArticlesGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>;
};

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = async ({
  article,
}) => {
  const comments = await prisma.comment.findMany({
    where: { articleId: article.id },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  const likes = await prisma.like.findMany({
    where: { articleId: article.id },
  });

  const { userId } = await auth();

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId as string },
  });

  const isLiked : boolean = likes.some((like)=> like.userId == user?.id)

  return (
    <div className="min-h-screen bg-background">
      <ArticlesNavbar/>
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <header className="mb-8">
            <div className="flex flex-col gap-2 mb-2">
              <div className="px-3 py-1 text-sm">{article.category}</div>
              <div className="text-4xl font-bold mb-2">{article.title}</div>

              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={article.author.imageUrl || ""} />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>

                <div className="flex justify-between items-center gap-10">
                  <div>
                    <p className="font-medium">{article.author.name}</p>
                  </div>
                  <div>
                    <p className="text-xs">
                      {article.createdAt.toDateString()} . 12 min to read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section
            className="mb-12 max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Action Button */}
          <LikeButton articleId={article.id} likes={likes} isLiked={isLiked}/>

          <CommentInput articleId={article.id} />

          {/*Comment Section*/}
          <CommentList comments={comments} />
        </article>
      </main>
    </div>
  );
};

export default ArticleDetailPage;
