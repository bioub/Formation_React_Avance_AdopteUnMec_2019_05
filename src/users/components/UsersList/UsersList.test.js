import React from 'react';
import { shallow } from 'enzyme';
import { UsersList } from './UsersList';
import { userFetchRequested } from '../../actions';

jest.mock('../../actions');

beforeEach(() => {
  userFetchRequested.mockClear();
  userFetchRequested.mockReturnValue({ type: 'USER_FETCH_REQUESTED' });
});

it('should render', () => {
  const cb = jest.fn();
  const wrapper = shallow(<UsersList dispatch={cb} />);

  expect(cb).toHaveBeenNthCalledWith(1, { type: 'USER_FETCH_REQUESTED' });
});
