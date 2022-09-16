import React from 'react'
import { useState } from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
    // const [hover, setHover] = useState(true)

    return (
        <section className={`${styles.flexCenter} m-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px]`}>
                        <img
                            src={client.logo}
                            alt="clients"
                            className="sm:w-[192px] w-[100px] object-contain"
                            // onMouseOver={() => setHover(false)}
                            // onMouseOut={() => setHover(true)}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clients
