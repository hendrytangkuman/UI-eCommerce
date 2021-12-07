import React from 'react'

function Card() {
    return (
        <div className="border col mb-5 pb-5 ms-4 me-4">
                <div className="card h-100 mt-4">
                    <div className="position-relative top-0 start-0 ">
                        <button type="button" className="btn btn-secondary">NEW</button>
                    </div>
                    <div className="position-absolute top-0 end-0 mt-1 me-1">
                        <button type="button" class="btn bi-list-ul btn-outline-secondary border-0"></button>
                        <button type="button" class="btn bi-heart btn-outline-secondary border-0"></button>
                    </div>

                    <img className="container card-img-top mt-4 mb-2 " src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sfrm=jpg" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Wooden Chair</h5>
                            <div>
                                <div className="position-absolute bottom-0 start-0 ms-2 mb-2">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <div className="position-absolute bottom-0 end-0 me-2 mb-2">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-outline-secondary">Rp 12.000</button>
                                        <button type="button" class="btn bi-cart-fill btn-outline-secondary"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;
