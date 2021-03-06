/*
 * @Description:
 * @version:
 * @Author: tjwang
 * @Date: 2021-10-18 08:56:41
 * @LastEditors: tjwang
 * @LastEditTime: 2021-10-20 09:19:12
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, {ButtonSize, ButtonType, ButtonProps } from './button';
const defaultProps: ButtonProps = {
  onClick: jest.fn()
}
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  children: 'Nice',
  className: 'Hello'
}
const disabledProps: ButtonProps = {
  disabled: true,
  children: 'Disabled',
  onClick: jest.fn()
}
describe('test Button component', () => {
  it('should render correct default button', () => {
    const wrapper = render(<Button { ...defaultProps }>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    // expect(defaultProps.onClick).toHaveBeenCalled()
  });
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button { ...testProps }>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg Hello')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button { ...disabledProps }>Disabled</Button>);
    const element = wrapper.getByText('Disabled') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  })
});
