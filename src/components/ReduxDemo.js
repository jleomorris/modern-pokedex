import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  initListings,
  addListing,
  deleteListing,
} from '../redux/listingsReducer';

const ReduxDemo = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings);

  useEffect(() => {
    dispatch(initListings());
  }, [dispatch]);

  const removeListing = (listingName) => {
    dispatch(deleteListing(listingName));
  };

  return (
    <>
      <StyledTable>
        <div className="content-container">
          <h1>Redux Demo</h1>
          <p>
            A simple form demo, example actions and reducers have been setup in
            the source code.
          </p>
          <table order="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing.name}>
                  <td>{listing.name}</td>
                  <td>{listing.age}</td>
                  <td>
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={() => removeListing(listing.name)}
                      onKeyDown={() => {}}
                    >
                      X
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <StyledSubmitListing>
            <SubmitListing />
          </StyledSubmitListing>
        </div>
      </StyledTable>
    </>
  );
};

// Components
const SubmitListing = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addListing(name, age));
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="Age"
        onChange={({ target }) => setAge(target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// Styled components
const StyledTable = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;

  h1 {
    color: black;
    text-align: center;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5rem;
    width: 100%;

    @media (max-width: 1600px) {
      top: -30px;
      left: 50%;
    }
  }

  .content-container {
    width: 60%;
    border-radius: 2rem;
    background: rgba(256, 256, 256, 0.2);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 6rem 8rem;
    margin: 6rem 0rem;
    position: relative;

    @media (max-width: 800px) {
      width: 90%;
    }
  }

  table {
    width: 60%;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    font-size: 1.5rem;
    margin: 3rem 0rem;
    padding: 1rem;
    border-radius: 1rem;
  }

  td {
    padding: 1rem;
    text-align: center;
  }
`;

const StyledSubmitListing = styled.div`
  form {
    @media (max-width: 1000px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    input {
      border-radius: 0.5rem;
      padding: 1rem 0.5rem;
      border: none;
      margin: 1rem 0.5rem;
      outline: none;
    }

    button {
      padding: 0.5rem 1rem;
      outline: none;
    }
  }
`;

export default ReduxDemo;
