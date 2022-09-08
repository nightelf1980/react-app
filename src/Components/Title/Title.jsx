import React from "react";
let title = "JARDINERÍA ARTEMIS"
let subtitle = "Productos de Jardinería, plantas de interior y exterior, cactus y suculentas."

const Title = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">{title}</h1>
                <p className="text-center">{subtitle}</p>
            </div>
        </div>

    )
}

export default Title