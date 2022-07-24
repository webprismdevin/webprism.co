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
        .title("Home Page")
        .icon(AiOutlineHome)
        .child(
          S.editor()
            .id("homepage")
            .schemaType("homepage")
            .documentId("homepage")
            .title("Home Page")
        ),
      // S.listItem()
      //   .title("Web Design")
      //   .icon(AiOutlineGlobal)
      //   .child(
      //     S.editor()
      //       .id("web-design")
      //       .schemaType("web-design")
      //       .documentId("web-design")
      //       .title("Web Design")
      //   ),
      //   S.listItem()
      //   .title("Digital Marketing")
      //   .icon(AiOutlineNotification)
      //   .child(
      //     S.editor()
      //       .id("digital-marketing")
      //       .schemaType("digital-marketing")
      //       .documentId("digital-marketing")
      //       .title("Digital Marketing")
      //   ),
      // S.listItem()
      //   .title("Services")
      //   .schemaType("service")
      //   .child(
      //     S.documentTypeList("service")
      //       .title("Service Pages")  
      //   ),
      // S.listItem()
      //   .title("Links Page")
      //   .icon(SiBiolink)
      //   .child(
      //     S.editor()
      //       .id("links_page")
      //       .schemaType("links_page")
      //       .documentId("links_page")
      //       .title("Links Page")
      //   ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "link",
            "links_page",
            "post",
            "homepage",
            "web-design",
            "service",
            "digital-marketing",
            "siteSettings"
          ].includes(listItem.getId())
      ),
    ]);
