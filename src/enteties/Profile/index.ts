import profileReducer, {setEditable} from './slice/profileSlice';
import {updateUserProfile} from './services/updateUserProfile';
import {getUserProfile} from './services/getUserProfile';
import {profileFormSelector} from '@/enteties/Profile/selectors/profileFormSelector';
import {profileIsLoadingSelector} from '@/enteties/Profile/selectors/profileIsLoadingSelector';
import {profileReadOnlySelector} from '@/enteties/Profile/selectors/profileReadOnlySelector';
import {profileSelector} from '@/enteties/Profile/selectors/profileSelector';

export {
    profileReducer, updateUserProfile, getUserProfile, profileFormSelector,
    profileIsLoadingSelector,
    profileReadOnlySelector,
    profileSelector, setEditable,
};
