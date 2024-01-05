export const structure = (S: any, context: any) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Main Page")
        .child(
          S.editor()
            .id("mainPage")
            .schemaType("mainPage")
            .documentId("mainPage")
        ),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !["mainPage"].includes(listItem.getId())
      ),
    ])
