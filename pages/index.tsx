import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";

interface Props {
  className: string;
}

const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <Layout title="Food Bill Splitter">
      <div className={className}>
        <div className="container">
          <h1>Food Bill Splitter</h1>
          <p>The simple way to split a food bill among friends</p>
          <Link href={`/calculator`}>
            <button>Start</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

const StyledHomePage = styled(HomePage)`
  height: 100vh;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    margin: 0 2.4rem;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.white};

    > * {
      margin: 0;
    }

    h1 {
      text-transform: uppercase;
      font-size: 3.2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    button {
      font-size: 1.8rem;
      border-radius: 20px;
      border: none;
      padding: 0.8rem 2.8rem;
    }
  }
`;

export default StyledHomePage;
