
import React from 'react';

export default function Error() {
    return (
        <>
            {/* error content starts  */}
            <section className="error-content pt-90 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <span className="error-text">404</span>
                            <h2>page not found</h2>
                            <img src="/assets/images/torch.png" alt="torch" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}