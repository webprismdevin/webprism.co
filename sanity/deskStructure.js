/* eslint-disable import/no-anonymous-default-export */
import S from "@sanity/desk-tool/structure-builder";
import path from "path";
import { title } from "process";
import { SiBiolink } from "react-icons/si";
import {
  AiOutlineCheck,
  AiOutlineEdit,
  AiOutlineGlobal,
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlineProject,
  AiOutlineSetting,
} from "react-icons/ai";

export default () =>
  S.list()
    .title("Menu")
    .items([
      S.listItem()
      .title("Site Settings")
      .icon(AiOutlineSetting)
      .child(
        S.editor()
          .id("siteSettings")
          .schemaType("siteSettings")
          .documentId("siteSettings")
          .title("Site Settings")
      ),
      S.listItem()
        .title("Home")
        .icon(AiOutlineHome)
        .child(
          S.editor()
            .id("homepage")
            .schemaType("homepage")
            .documentId("homepage")
            .title("Home Page")
        ),
        S.listItem()
        .title("Portfolio")
        .icon(AiOutlineProject)
        .child(
          S.editor()
            .id("portfolio")
            .schemaType("portfolio")
            .documentId("portfolio")
            .title("Portfolio Page")
        ),
        S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "linkPageLink",
            "section",
            "homepage",
            "web-design",
            "service",
            "digital-marketing",
            "siteSettings",
            "portfolio"
          ].includes(listItem.getId())
      ),
    ]);
