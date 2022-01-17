import { useRef, useState, useEffect } from "react";
import { Table } from "./Table"
import "./from.css";
export const Dashboard = () => {
    const ref = useRef(null);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [form, setForm] = useState({
        name: "",
        title: "",
        salary: "",
        job: "",
        loc: "",
        type: "",
    });
    useEffect(() => {
        getData();
    }, [page]);

    const getData = () => {
        fetch(`http://localhost:3001/data?_page=${page}&_limit=4`)
            .then((d) => d.json())
            .then((res) => setData(res));
    };

    const handleChange = (e) => {

        let { name, value, checked, type } = e.target;
        value = type === "checkbox" ? checked : value;
        setForm({
            ...form,
            [name]: value,
        });
    };
    // console.log("form", form);
    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, form]);
        const payload = {
            name: form.name,
            title: form.title,
            job: form.job,
            salary: form.salary,
            loc: form.loc,
            type: form.type,
        };
        fetch("http://localhost:3001/data", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            getData();
        });
    };
    console.log("page", page)
    const salarySort = (val) => {
        fetch(`http://localhost:3001/data?_sort=salary&_order=${val}`)
            .then((e) => e.json())
            .then((e) => {
                console.log("sort", e);
                setData(e)
            });
    };

    console.log("inside sort", data)
    return (
        <>
            <div className="main">
                <div className="formDiv">
                    <form onSubmit={handleSubmit}>
                        <label>company name</label>
                        <input type="text" name="name" placeholder="Company Name" onChange={handleChange} />
                        <br />
                        <label>job title</label>
                        <input type="text" name="title" placeholder="Job title" onChange={handleChange} />
                        <br />
                        <label> salary range</label>
                        <input type="text" name="salary" placeholder=" salary range" onChange={handleChange} />
                        <br />
                        <label>job description</label>
                        <input type="text" name="job" placeholder="job description" onChange={handleChange} />
                        <br />
                        <label> location</label>
                        <input type="text" name="loc" placeholder=" location" onChange={handleChange} />
                        <br />
                        <label>job type</label>
                        <input type="text" name="type" placeholder="job type" onChange={handleChange} />
                        <input type="submit" value="register" />
                    </form>
                </div>
                <div className="dataDiv">
                    <Table list={data} />
                    <button onClick={() => setPage(page - 1)}>prev</button>
                    <button onClick={() => setPage(page + 1)}>next</button>
                    <br />
                    <button onClick={() => salarySort("asc")}>Salary Low to High</button>
                    <button onClick={() => salarySort("desc")}>Salary High to Low</button>
                </div>
            </div>

        </>
    );
};
