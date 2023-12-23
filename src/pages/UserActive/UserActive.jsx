import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import './UserActive.css'

export const UserActive = (userId) => {
    const users = useSelector((state) => state.users.users);
    const userActiveId = useSelector((state) => state.users.userId)
    const person = users.find(user => user.id === userActiveId)

    return (
        <section>
            <h2>User details</h2>
            <Link
                to='/'
                className="home-link"
            >Home</Link>
            <div className="container">
                <img src={person.image} alt="" />
                <h4>{person.firstName} {person.lastName}</h4>
                <ul>
                    <li><span>Age:</span>{person.age}</li>
                    <li><span>City:</span>{person.address.city}</li>
                    <li><span>Address:</span>{person.address.address}</li>
                    <li><span>Email:</span>{person.email}</li>
                    <li><span>Height:</span>{person.height}</li>
                    <li><span>Weight:</span>{person.weight}</li>
                    <li><span>Email:</span>{person.email}</li>
                    <li><span>Phone:</span>{person.phone}</li>
                    <li><span>University:</span>{person.university}</li>
                </ul>
            </div>
        </section >
    )
}