"use client";
import { createComment } from "@/actions/create-comment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useActionState } from "react";

type CommentInputProps = {
  articleId: string;
};

const CommentInput: React.FC<CommentInputProps> = ({ articleId }) => {
  const [formState, action, isPending] = useActionState(
    createComment.bind(null, articleId),
    { errors: {} },
  );

  return (
    <form action={action} className="mb-8">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Input type="text" name="body" placeholder="Comment" />
          {formState.errors.body && (
            <p className="text-red-600 text-sm">{formState.errors.body}</p>
          )}
          <div className="mt-4 flex justify-end">
            <Button disabled={isPending}>
              {isPending ? "Loading" : "Post Comment"}
            </Button>
          </div>
          {formState.errors.formErrors && (
            <div className="border-red-600 bg-red-100 p-2">
              {formState.errors.body}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CommentInput;
