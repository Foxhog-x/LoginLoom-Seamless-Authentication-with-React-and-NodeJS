import { useEffect, useReducer, useState } from "react";
import "./dashboard.css";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import { ModalAddUser } from "../components/ModalAddUser";
import trashIcon from "../assets/recycle-bin.png";
// import { useNavigate } from "react-router";
export const Dashboard = () => {
  const [modalShow, setModalShow] = useState(false);
  const [search, setSearch] = useState("");
  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("authToken");
    if (token === null) {
      alert("please login first ");
      navigate("/pagenot");
    }
  }, [navigate]);
  // const navigate = useNavigate();
  const [apiData, setapiData] = useState([]);
  const [isloding, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8000/userdetails");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setapiData(data);
        isloding(false);
      } catch (error) {
        // setError(error.message);
      }
    };
    fetchApi();
  }, [modalShow, search, isloding, ignore]);

  const searchFunction = () => {
    let filterData = apiData;
    if (search) {
      filterData = filterData.filter((value) =>
        value.firstname.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filterData.length ? filterData : ["nodata"];
  };

  const handleDeleteApi = (_id) => {
    if (window.confirm("Are you sure to delete this")) {
      try {
        fetch("http://localhost:8000/userdetails/delete", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: _id,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data.success);
            forceUpdate();
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(searchFunction());
  return (
    <>
      <div className="main_container_dash"></div>
      <div className="main_container_dash_flex">
        <h1>User Details </h1>
        <div className="left_dash_flex">
          <div className="flexdis"></div>

          <Button variant="primary" onClick={() => setModalShow(true)}>
            Add User
          </Button>
          <Button variant="danger"> Delete All</Button>
        </div>
      </div>
      <div className="search_div">
        <input
          style={{ borderRadius: "5px" }}
          className="search"
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>
      <div className="scroll">
        <Table striped bordered hover variant="dark" cellspacing="0">
          <thead>
            <tr className="table-light">
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {searchFunction().map((value, index) => {
              return (
                <>
                  {value !== "nodata" ? (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        {value.firstname &&
                          value.firstname[0].toUpperCase() +
                            value.firstname.substring(1)}
                      </td>
                      <td>
                        {value.lastname &&
                          value.lastname[0].toUpperCase() +
                            value.lastname.substring(1)}
                      </td>
                      <td>{value.email}</td>
                      <td>{value.country}</td>
                      <td>{value.state}</td>
                      <td>{value.city}</td>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        <Button
                          variant="light"
                          className="deletebtn"
                          onClick={() => {
                            handleDeleteApi(value._id);
                          }}
                        >
                          <img
                            src={trashIcon}
                            style={{ width: "20px", height: "20px" }}
                          />
                        </Button>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td colSpan={8} className="text-center">
                        No Data Available
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
      <ModalAddUser show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};