import { Container } from "@/components/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <p className="text-center text-secondary">
              &copy; 2016-2017 Neil & Simone
            </p>
          </div>
          <div class="col-1">
            <a href="#">
              <i class="bi bi-arrow-up-circle text-primary h1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
