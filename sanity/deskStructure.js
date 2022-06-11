/* eslint-disable import/no-anonymous-default-export */
import S from "@sanity/desk-tool/structure-builder";
import path from "path";
import { title } from "process";
import { SiBiolink } from "react-icons/si";
import { AiOutlineCheck, AiOutlineEdit, AiOutlineHome } from 'react-icons/ai'

export default () =>
  S.list()
    .title("Menu")
    .items([
      S.listItem()
      .title("Home Page")
      .icon(AiOutlineHome)
      .child(
        S.editor()
          .id("home_page")
          .schemaType("homepage")
          .documentId("homepage")
          .title("Home Page")
      ),
      S.listItem()
        .title("Links Page")
        .icon(SiBiolink)
        .child(
          S.editor()
            .id("links_page")
            .schemaType("links_page")
            .documentId("links_page")
            .title("Links Page")
        ),
      S.listItem()
        .title("Draft Posts")
        .icon(AiOutlineEdit)
        .child((title) =>
          S.documentList()
            .title("Drafts")
            .filter('_id in path("drafts.**") && _type == "post"')
            .params({ title })
        ),
      S.listItem()
        .title("Published Posts")
        .icon(AiOutlineCheck)
        .child((title) =>
          S.documentList()
            .title("Published")
            .filter('!(_id in path("drafts.**")) && _type == "post"')
            .params({ title })
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["link", "links_page", "post", "homepage"].includes(listItem.getId())
      ),
    ]);
