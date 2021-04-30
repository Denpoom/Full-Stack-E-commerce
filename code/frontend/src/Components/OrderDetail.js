import React from "react";

const OrderDetail = () => {
  return (
    //form
    <section className="#">
      <div className="font-sans">
        <div class="mt-4 text-left"><b><i class="fas fa-archive"></i> Order Number</b> : 001 - ชื่อสินค้าที่สั่ง<hr></hr>
        </div>
        <div class="text-left mt-2"><i class="fas fa-user"></i> <b>User</b> : ง่วง<br></br>
        <li> ชื่อลูกค้า : นายอ้วน อิอิ</li>
        <li> ที่อยู่ : ไม่บอก</li>
        <li> เบอร์โทรศัพท์ : 0000</li>
        <b><i class="mt-2 fas fa-calendar"></i> Date Order</b> : 24/10/11<br></br>
        <b><i class="mt-2 fas fa-chart-pie"></i> Item</b> : 2<br></br>
        <b><i class="mt-2 far fa-money-bill-alt"></i> Total Cost</b> : $ 2000<br></br>
        <b><i class="mt-2 fas fa-exclamation-circle"></i> Status</b> : Finished
        </div>
        {/* <a href="javascript:javascript:history.go(-1)"> */}
        <button
                        data-toggle="modal"
                        data-target="#myModal"
                        type="button"
                        class="mt-4 col-11 px-6 py-4 btn button-admin"
                      >
        <i class="fas fa-arrow-circle-left"></i> ย้อนกลับ
        </button>
        {/* </a> */}
      </div>
    </section>
  );
};
export default OrderDetail;
