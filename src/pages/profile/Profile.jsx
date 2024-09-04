import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import Order from "../../components/order/Order";

import "./Profile.scss";

const Profile = () => {
  const { user, orders, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <section className="profile">
      <div className="profile__user">
        {user ? (
          <>
            <div className="profile__pic" />

            <div className="profile__data">
              <p className="profile__name">{user.name}</p>
              <p className="profile__email">{user.email}</p>
              <div className="profile__orders">
                <p>
                  <span>{orders ? orders.length : 0}</span>
                </p>
                orders in total
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {orders && (
        <div>
          {orders.map((order) => {
            return <Order order={order} key={order.id} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Profile;
