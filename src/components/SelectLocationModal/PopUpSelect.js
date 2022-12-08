import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { countries } from "../../data/countries";
export const PopUpSelect = ({ isOpen, setIsOpen, selected, onChange }) => {
  // const itemElement = useRef([]);

  const [isEntered, setIsEntered] = useState(false);
  const [focusedItemIndex, setFocusedItemIndex] = useState(0);

  const handleOutsideClick = (e) => {
    setIsOpen(false);
  };

  const refs = countries.reduce((acc, value) => {
    acc[value.name] = React.createRef();
    return acc;
  }, {});

  const getIndex = (arrayList, name) => {
    const index = arrayList.findIndex((item) => {
      return item.name === name;
    });
    return index;
  };

  // Handle Click Items
  const handleClickItem = (event) => {
    setIsOpen(false);

    onChange("name", event.target.id);
    event.stopPropagation();
  };

  // Assign Ref component to detect outside click
  const ref = useOutsideClick(handleOutsideClick);

  //Set the focus to selected item and postion the list view to center
  useEffect(() => {
    if (ref.current && isOpen) {
      const country = selected.type === "name" ? selected.label : "Afghanistan";
      //Set the current Selected item

      const centerView = ref.current.offsetHeight / 2;
      ref.current.scrollTop = refs[country].current?.offsetTop - centerView;
      // refs[current.label].current?.focus();
      const currentIndex = getIndex(countries, refs[country].current.id);
      setFocusedItemIndex(currentIndex);
    }

    return () => {};
  }, [isOpen]);

  // Set the focus to the selected item
  useEffect(() => {
    // Get Country Name from coutries list
    const selectedID = countries[focusedItemIndex].name;
    refs[selectedID].current?.focus();
  }, [focusedItemIndex]);

  // Handle keyboard keys
  const keyDownHandler = (event) => {
    const keyCode = event.keyCode;

    switch (keyCode) {
      case 40:
        //Handle Down Arrow
        event.preventDefault();
        setFocusedItemIndex((prevState) => prevState + 1);

        break;
      case 38:
        //Handle Up Arrow
        event.preventDefault();
        setFocusedItemIndex((prevState) => prevState - 1);
        break;
      //Handle Tab Key
      case 9:
        event.preventDefault();
        if (event.shiftKey) {
          setFocusedItemIndex((prevState) => prevState - 1);
        } else {
          setFocusedItemIndex((prevState) => prevState + 1);
        }

        break;
      case 13:
        //Handle Enter Key
        event.preventDefault();
        setIsEntered(true);
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // Set Current Location When Entered Key has been pressed
  useEffect(() => {
    if (isEntered) {
    }

    return () => {
      setIsEntered(false);
    };
  }, [selected, isEntered]);

  // Add a Keydown event listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", keyDownHandler);
    }

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <Container>
          <OverflowContainer ref={ref}>
            <CountryList tabIndex={-1}>
              {countries.map((item) => {
                return (
                  <ListItem
                    tabIndex={0}
                    key={item.name}
                    onClick={handleClickItem}
                    id={item.name}
                    ref={refs[item.name]}
                    // ref={(e) => (itemElement.current[item.name] = e)}
                    role="option"
                    isSelected={item.name === selected.label}
                  >
                    {item.name}
                  </ListItem>
                );
              })}
            </CountryList>
          </OverflowContainer>
        </Container>
      ) : null}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -33px;
`;

const OverflowContainer = styled.div`
  height: 400px;
  width: 90%;
  background-color: white;
  overflow: auto;
  border: 1px solid #cdcdcd;
  border-color: rgba(0, 0, 0, 0.2);

  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.13);
  background-color: #fff;
`;
const CountryList = styled.ul``;

const ListItem = styled.li`
  border: 1px solid transparent;
  padding: 4px 10px;
  font-size: 14px;
  margin: 0 1px;
  cursor: pointer;
  ${(props) => (props.isSelected ? selectedStyle : null)}
  &:hover {
    border-color: #d5d9d9;
    background-color: #f0f2f2;
    color: inherit;
  }

  &:focus {
    border-color: #007185;
    background-color: #edfdff;

    color: inherit;
  }
`;

const selectedStyle = css`
  background-color: #edfdff;
  border-color: #d5d9d9;
  border-left-color: #007185;
`;
