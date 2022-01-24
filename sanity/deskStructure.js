/* eslint-disable import/no-anonymous-default-export */
import S from "@sanity/desk-tool/structure-builder";
import { SiBiolink } from 'react-icons/si'

export default () => 
    S.list()
        .title("Menu")
        .items([
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
                S.divider(),
                ...S.documentTypeListItems().filter(
                  (listItem) => !["link", "links_page"].includes(listItem.getId()) 
                )
        ])
