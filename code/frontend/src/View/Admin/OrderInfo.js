import React from "react";
import { Link } from "react-router-dom";
import List from "../../Components/ListAdmin";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "Order", width: 90 },
  { field: "user", headerName: "User", width: 120 },
  { field: "email", headerName: "E-mail", width: 240 },
  { field: "date", headerName: "Date", width: 120 },
  { field: "item", headerName: "Item", width: 85 },
  { field: "total", headerName: "Total", width: 100 },
  { field: "status", headerName: "Status", width: 100 },
];
const rows = [
  {
    id: "001",
    user: "Username",
    email: "grtdfsdf@gdfdfg.com",
    date: "24/11/20",
    item: 2,
    total: "$ 3000",
    status: "Processing",
  },
  {
    id: "002",
    user: "Username",
    email: "grtdfsdf@gdfdfg.com",
    date: "24/11/20",
    item: 2,
    total: "$ 3000",
    status: "Finished",
  },
  {
    id: "003",
    user: "Username",
    email: "grtdfsdf@gdfdfg.com",
    date: "24/11/20",
    item: 2,
    total: "$ 3000",
    status: "Finished",
  },
  {
    id: "004",
    user: "Username",
    email: "grtdfsdf@gdfdfg.com",
    date: "24/11/20",
    item: 2,
    total: "$ 3000",
    status: "Finished",
  },
  {
    id: "005",
    user: "Username",
    email: "grtdfsdf@gdfdfg.com",
    date: "24/11/20",
    item: 2,
    total: "$ 3000",
    status: "Processing",
  },
  {
    id: "006",
    user: "Username",
    email: "grtdfsdf@gdfdfg.com",
    date: "24/11/20",
    item: 2,
    total: "$ 3000",
    status: "Processing",
  },
  {
    id: "007",
    user: "Username",
    email: "grtdfsdf@gdfdfg.com",
    date: "24/11/20",
    item: 2,
    total: "$ 3000",
    status: "Finished",
  },
  {
    id: "008",
    user: "Username",
    email: "grtdfsdf@gdfdfg.com",
    date: "24/11/20",
    item: 2,
    total: "$ 3000",
    status: "Finished",
  },
  {
    id: "009",
    user: "Username",
    email: "grtdfsdf@gdfdfg.com",
    date: "24/11/20",
    item: 2,
    total: "$ 3000",
    status: "Finished",
  },
];

const OrderInfo = () => {
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div className="relative mt-8 flex flex-col lg:justify-center items-center">
          <div className="mt-5 relative lg:max-w-screen-2xl w-full">
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                <i class="fas fa-user-cog"></i> Admin Dasboard
              </h1>
              <hr></hr>

              <div class="ml-2 mt-4 row text-left">
                <List />
                <div class="mt-1 col-md-8">
                  <div class="h2">
                    <i class="fas fa-list"></i> Manage Order<br></br>
                  </div>
                  <div class="row">
                    <div class="col-11 px-6 py-4 border rounded bg-gray-100 shadow-md">
                      <div style={{ height: 400, width: "100%" }}>
                        <DataGrid rows={rows} columns={columns} pageSize={5} />
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 row">
                    <Link to="/admin/order/id_order">
                      <button
                        type="button"
                        class="mt-2 col-11 px-6 py-4 btn button-admin"
                      >
                        <i class="fas fa-eye"></i> View Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderInfo;
