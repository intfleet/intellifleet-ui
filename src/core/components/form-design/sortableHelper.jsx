import Sortable from 'sortablejs';
import UtilityUtils from '../../utils/utilityUtils';


const SortableHelper = {
    init: (currentRef, callbackOnEnd = () => { }) => {
        return Sortable.create(currentRef, {
            animation: 150,
            // handle: ".drag-handle", // optional
            ghostClass: "sortable-ghost-" + UtilityUtils.generateUniqueId(),
            onEnd: (evt) => {
                if (evt.oldIndex === evt.newIndex) return; // no change
                callbackOnEnd(evt.oldIndex, evt.newIndex);
            }
        });
    }
};

export default SortableHelper;