import { Dialog } from '../components/Dialog'

import { toast } from 'react-toastify'

export const showMessage = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  warn: (msg: string) => toast.warn(msg),
  warning: (msg: string) => toast.warning(msg),
  info: (msg: string) => toast.info(msg),
  dismiss: () => toast.dismiss(),
  confirm: (data: string, onClose: (reason: boolean) => void) =>
    toast(Dialog, {
      data,
      onClose: (reason) => {
        if (reason) return onClose(true)
        return onClose(false)
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    }),
}
