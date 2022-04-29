import Realm from "realm";

const Dog = {
  name: "Dog",
  properties: {
    name: "string",
    age: "int",
    type: "string",
  },
};
// afterAll(() => Realm.deleteFile({ path: "bundle.realm" }));
test("create bundled realm", async () => {
  // :snippet-start: create-react-native-bundle
  // open realm
  const config = {
    schema: [Dog],
    path: "bundle.realm",
  };
  const realm = await Realm.open(config);

  // add data to realm
  realm.write(() => {
    realm.create("Dog", { name: "Jasper", age: 10, type: "Golden Retriever" });
    realm.create("Dog", { name: "Maggie", age: 12, type: "Collie" });
    realm.create("Dog", { name: "Sophie", age: 6, type: "German Shepard" });
  });

  realm.close();
  // :snippet-end:
});