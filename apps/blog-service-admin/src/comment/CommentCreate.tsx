import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AuthorTitle } from "../author/AuthorTitle";
import { BlogPostTitle } from "../blogPost/BlogPostTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="author.id" reference="Author" label="author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="blogPost.id"
          reference="BlogPost"
          label="blogPost"
        >
          <SelectInput optionText={BlogPostTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
