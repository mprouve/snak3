import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';

/**
 * REDUX
 */

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;
