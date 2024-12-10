```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    await router.push('/another-page');
    // Perform some action after navigation
    console.log('Navigated to another page');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```