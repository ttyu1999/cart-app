import { useContext, useState } from 'react';
import FormSelect from '../../UI/FormSelect';
import FILTER_DATA from '../../../assets/filter-data';
import { ProductListFilter } from '../../../store/contexts';

const FilterProduct = () => {
    const [ filterList, setFilterList ] = useState(false);
    const [ selectDefault, setSelectDefault ] = useState('上架時間：由新到舊');

    const ctx = useContext(ProductListFilter);

    const selectedHandler = (key, value) => {
        setSelectDefault(value[0]);
        ctx.setFilterData(key[0]);
    }

    return (
        <FormSelect
            selectDefault={selectDefault}
            filterList={filterList}
            setFilterList={setFilterList}
            maxWidth={true}
        >
            {
                FILTER_DATA.map(data => {
                    return (
                        <li key={Object.keys(data)} onClick={() => selectedHandler( Object.keys(data), Object.values(data))}>
                            {Object.values(data)}
                        </li>
                    );
                })
            }
        </FormSelect>
    );
}

export default FilterProduct;
