import "./mongoose-connect";
import { CustomerModel, AdminModel, ProductModel } from "./models";
import admins from "./data/admins.json";
import customers from "./data/customers.json";
import products from "./data/products.json";

const migrate = async () => {
  const adminDocs = await AdminModel.create(
    admins.map((user) => ({ ...user }))
  );
  const ads = adminDocs.reduce(
    (prev, cur) => ({ ...prev, [cur.username]: cur._id }),
    {}
  );
  await CustomerModel.create(customers.map((user) => ({ ...user })));
  await ProductModel.create(products.map((product) => ({ ...product })));
  console.log("Migrate completed");
};
migrate();
