import * as React from "react";
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPrefix } from '../_util/method';
import './style/index.less';

export interface ButtonProps {
  type?: 'info' | 'success' | 'danger' | 'warning';
  prefixCls?: string;
  className?: string;
  component?: 'button'| 'a'| 'div'| 'span';
  children?: React.ReactNode;
  onClick?:()=>{};
}

interface ButtonState {
  loading?: boolean | { delay?: number };
  hasTwoCNChar: boolean;
}

//js数据类型
//number string undefined null boolean object symbol
//typeof of this.number
export default class Button extends React.Component<ButtonProps,ButtonState> {
  static defaultProps = {
    loading: false,
    ghost: false,
    block: false,
    htmlType: 'button',
  };
  static propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    block: PropTypes.bool,
    title: PropTypes.string
  };
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      hasTwoCNChar: false
    };
  }


  render() {

    const { type = 'info' } = this.props
    const prefix = getPrefix('button');
    const className = classNames(prefix, `${prefix}-${type}`)
    return <div className={className} onClick={this.props.onClick}>{this.props.children}</div>
  }
}
