import { ValueOf } from '../../utils/types/ValueOf';

const RESOURCE_STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

type ResourceStatus = ValueOf<typeof RESOURCE_STATUS>;

export function wrapPromise<T>(promise: Promise<T>) {
  let status: ResourceStatus = RESOURCE_STATUS.PENDING;
  let result: T;

  const suspender = promise.then(
    (response) => {
      status = RESOURCE_STATUS.SUCCESS;
      result = response;
    },
    (error) => {
      status = RESOURCE_STATUS.ERROR;
      result = error;
    },
  );

  return {
    read() {
      switch (status) {
        case RESOURCE_STATUS.PENDING:
          throw suspender;
        case RESOURCE_STATUS.ERROR:
          throw result;
        default:
          return result;
      }
    },
  };
}
