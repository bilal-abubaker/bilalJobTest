import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('expects addContactButton to be in App Component', () => {
  const {queryByTestId} = render (<App/>);
  const addContactButton = queryByTestId("add-contact-button");
  expect(addContactButton).toBeInTheDocument();
});


test('expects Drawer not to be in App Component on render', () => {
  const {queryByTestId} = render (<App/>);
  const addContactDrawer = queryByTestId("add-contact-drawer");
  expect(addContactDrawer).not.toBeInTheDocument();
});

test('expects Drawer  to be in App Component on render', () => {
  const {queryByTestId} = render (<App/>);
  const addContactButton = queryByTestId("add-contact-drawer");
  fireEvent.click(addContactButton)
  
  const addContactDrawer = queryByTestId("add-contact-drawer");
  expect(addContactDrawer).toBeInTheDocument();

});