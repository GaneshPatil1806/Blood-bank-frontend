import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer_div text-center text-lg-start  text-muted">
        <section className="footer">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 "></i>Blood Bank Management 
                </h6>
                <p>
                  Blood donation is crucial for saving lives in emergencies, surgical procedures, and treating medical conditions. It ensures a steady supply of blood for patients in need and helps maintain community health. Donating blood is a simple and impactful way to make a difference and support healthcare systems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
