import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import Order from "../../components/order/Order";

import "./Profile.scss";

const Profile = () => {
  const { user, orders, getUserInfo, updatePicture } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  const uploadImage = async (event) => {
    if (event.target.files.length === 0) return;

    const formData = new FormData();
    formData.append("picture", event.target.files[0]);
    formData.append("name", event.target.files[0].name);

    await updatePicture(formData);
  };

  return (
    <section className="profile">
      <div className="profile__user">
        {user ? (
          <>
            {user.picture ? (
              <div className="profile__pic">
                <img
                  src={user.picture}
                  alt={`${user.name}'s profile picture`}
                />
                <label htmlFor="picture" className="profile__upload hide">
                  <p>+</p>
                </label>
                <input id="picture" type="file" onInput={uploadImage} />
              </div>
            ) : (
              <div className="profile__pic">
                <label htmlFor="picture" className="profile__upload">
                  <p>+</p>
                </label>
                <input id="picture" type="file" onInput={uploadImage} />
              </div>
            )}

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
        <div className="profile__orderList">
          {orders.map((order) => {
            return <Order order={order} key={order.id} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Profile;
