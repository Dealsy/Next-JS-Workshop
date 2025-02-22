'use client'

type ErrorProps = {
  error: Error
  reset: () => void
}

type ErrorType = 'NetworkError' | 'ValidationError' | 'AuthError' | 'DefaultError'

function getErrorType(error: Error): ErrorType {
  if (error instanceof TypeError && error.message.includes('network')) {
    return 'NetworkError'
  }

  if (error.message.includes('validation')) {
    return 'ValidationError'
  }

  if (error.message.includes('auth') || error.message.includes('unauthorized')) {
    return 'AuthError'
  }

  return 'DefaultError'
}

function getErrorContent(type: ErrorType) {
  switch (type) {
    case 'NetworkError':
      return {
        title: 'Network Error',
        message: 'Please check your internet connection and try again.',
        buttonText: 'Retry Connection',
        buttonClass: 'bg-blue-500 hover:bg-blue-600',
      }
    case 'ValidationError':
      return {
        title: 'Validation Error',
        message: 'The provided data was invalid. Please check your input and try again.',
        buttonText: 'Try Again',
        buttonClass: 'bg-yellow-500 hover:bg-yellow-600',
      }
    case 'AuthError':
      return {
        title: 'Authentication Error',
        message: 'You are not authorized to perform this action.',
        buttonText: 'Back to Home',
        buttonClass: 'bg-red-500 hover:bg-red-600',
      }
    default:
      return {
        title: 'Something went wrong!',
        message: 'An unexpected error occurred.',
        buttonText: 'Try Again',
        buttonClass: 'bg-primary hover:bg-primary/90',
      }
  }
}

export default function Error({ error, reset }: ErrorProps) {
  console.log('Error', error)
  const errorType = getErrorType(error)
  const content = getErrorContent(errorType)

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-destructive">{content.title}</h2>
        <p className="mt-2 text-muted-foreground">{content.message}</p>
        <p className="mt-1 text-sm text-muted-foreground/80">{error.message}</p>
      </div>
      <button
        onClick={reset}
        className={`rounded-md px-4 py-2 text-primary-foreground ${content.buttonClass}`}>
        {content.buttonText}
      </button>
    </div>
  )
}
