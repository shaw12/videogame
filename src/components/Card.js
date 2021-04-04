import React from 'react'

function Card({gamez}) {

    const handleDate = (x) => {
        var todayTime = new Date(x);
        var month = todayTime.getMonth() < 10 ? `0${todayTime.getMonth()}` : todayTime.getMonth()
        var day = todayTime.getDate() < 10 ? `0${todayTime.getDate()}` : todayTime.getDate()
        var year = todayTime.getFullYear()
        return day + "/" + month + "/" + year;
    }

    return (
        <ul>
            {
                gamez.map(post => (
                    <li key={post.id} className="card">
                        <div className="blackbox"></div>
                        <div className="card__main">
                            <h2>{post.name}</h2>
                            <h4 style={{fontWeight: 500}}>Release Date: { handleDate(post.first_release_date)}</h4>
                            <p>[Summary] {post.summary} </p>
                        </div>
                        <button>
                            <h1>{Math.ceil(post.rating * 0.1)}</h1>
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default Card
