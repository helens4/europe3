

function Post({ setSelectedCountry, country }) {
    return (
        <li className="post-component">
            <button onClick={() => setSelectedCountry(country)}>
                <img src={country.image} alt={country.name} />
                <p>{country.name}</p>
            </button>
        </li>
    )
}

export default Post