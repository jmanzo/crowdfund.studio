import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t-[1px]">
      <Container>
          <div className="my-10 text-[15px] text-center text-cfsGray dark:text-white">
            © {new Date().getFullYear()} | Say {" "}
            <a
              href="mailto:hello@crowdfund.studio"
              target="_blank"
              rel="noopener"
            >
              hello@crowdfund.studio
            </a>
          </div>
      </Container>
    </footer>
  );
}