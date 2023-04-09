import {
  MdDriveFileRenameOutline,
  MdDelete,
  FaBirthdayCake,
  IoLocation,
  IoMan,
} from "react-icons/all";

//
function User({ data, isPending, error, deleteOperation }) {
  return (
    <ul className="user">
      {data &&
        data.results.map((result) => {
          const { name, picture, dob, location, gender, id, email } = result;

          return (
            <li
              key={email}
              onClick={() => deleteOperation(email)}
              className="user__item"
            >
              <button className="user__delete--btn">
                <MdDelete style={{ fontSize: "35px" }} />
              </button>
              <img
                className="user__img"
                src={picture.large}
                alt=""
                width={100}
                height={100}
              />
              <div className="user__name">
                <MdDriveFileRenameOutline style={{ fontSize: "25px" }} />
                <span>
                  - {name.title},{name.first},{name.last}
                </span>
              </div>
              <div className="user__year">
                <FaBirthdayCake style={{ fontSize: "20px" }} />
                <span> - {dob.age} years old.</span>
              </div>
              <div className="user__location">
                <IoLocation style={{ fontSize: "21px" }} />
                <span>
                  - {location.city},{location.country}
                </span>
              </div>
              <div className="user__gender">
                <IoMan style={{ fontSize: "22px" }} />
                <span> - {gender}</span>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default User;
