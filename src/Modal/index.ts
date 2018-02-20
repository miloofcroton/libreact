import {Component} from 'react';
import {render} from 'react-universal-interface';
import FocusLock from 'react-focus-lock';
import {h, isClient, on, off, noop} from '../util';
import {Overlay, IOverlayProps} from '../Overlay';

let id = 0;

const ESC = 27;

export interface IModalProps extends IOverlayProps {
  dontLockFocus?: boolean;
  onEsc?: (event: KeyboardEvent) => void;
  onClose?: () => void;
}

export interface IModalState {
  close: () => void;
  idTitle: string;
  idDescription: string;
}

export class Modal extends Component<IModalProps, IModalState> {
  id: number;
  el: HTMLElement = null;
  activeEl: Element; // Previous active element;

  constructor (props, context) {
    super(props, context);

    this.id = id++;

    this.state = {
      close: () => (this.props.onClose || noop)(),
      idTitle: 'dialog-title-' + this.id,
      idDescription: 'dialog-descr-' + this.id
    };

    this.activeEl = isClient ? document.activeElement : null;
  }

  componentDidMount () {
    on(document, 'keydown', this.onKey);
  }

  componentWillUnmount () {
    off(document, 'keydown', this.onKey);

    const siblings = Array.from(document.body.children);

    for (let i = 0; i < siblings.length; i++) {
      const sibling = siblings[i] as HTMLElement;
      const sib = sibling as any;

      if (sibling === this.el) {
        continue;
      }

      if (!sib.__libreact_lock) {
        continue;
      }

      if (sib.__libreact_lock.owner !== this) {
        continue;
      }

      const lock = sib.__libreact_lock;

      sib.inert = lock.inert;
      sibling.style.setProperty('pointer-events', lock.pointerEvents),
      sibling.style.setProperty('user-select', lock.userSelect),

      sibling.removeAttribute('aria-hidden');
      delete sib.__libreact_lock;
    }

    // Focus previously active element.
    if (this.activeEl && (this.activeEl as any).focus) {
      (this.activeEl as any).focus();
    }
  }

  onElement = (el) => {
    this.el = el;

    el.setAttribute('role', 'dialog');
    el.classList.add('dialog');

    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'dialog-title-' + this.id);
    el.setAttribute('aria-describedby', 'dialog-descr-' + this.id);

    const siblings = Array.from(document.body.children);

    for (let i = 0; i < siblings.length; i++) {
      const sibling = siblings[i] as HTMLElement;

      if (sibling === el) {
        continue;
      }

      if ((sibling as any).__libreact_lock) {
        continue;
      }

      if (sibling.hasAttribute('aria-hidden')) {
        continue;
      }

      const sib = sibling as any;

      sib.__libreact_lock = {
        owner: this,
        inert: sib.inert,
        pointerEvents: sibling.style.getPropertyValue('pointer-events'),
        userSelect: sibling.style.getPropertyValue('user-select'),
      };

      sib.inert = true;
      sibling.style.setProperty('pointer-events', 'none');
      sibling.style.setProperty('user-select', 'none');
      sibling.setAttribute('aria-hidden', 'true');
    }

    (this.props.onElement || noop)(el);
  };

  onKey = (event) => {
    if (event.keyCode === ESC) {
      (this.props.onEsc || noop)(event);
    }
  };

  render () {
    const {color, dontLockFocus, time, onClick} = this.props;
    let element = render(this.props, this.state);

    if (!dontLockFocus) {
      element = h(FocusLock, null, element);
    }

    return h(Overlay, {
      color,
      time,
      onClick,
      onElement: this.onElement,
    },
      element
    );
  }
}
