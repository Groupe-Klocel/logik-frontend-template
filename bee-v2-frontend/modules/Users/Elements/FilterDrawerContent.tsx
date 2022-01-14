import { FC, useState } from 'react'
import { Checkbox } from 'antd'
import { getColumnsKeys } from 'helpers/utils/utils';
import { ColumnType } from 'helpers/types/types';

export interface IFilterDrawersProps {
	columns: Array<ColumnType>;
}

export const FilterDrawerContent: FC<IFilterDrawersProps> = ({ columns }: IFilterDrawersProps) => {


	return (
		<>
			<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
				Check all
			</Checkbox>
			{checkBoxData.map((checkbox) => (
                <div
                  key={checkbox.key}
                  className="modal-body d-flex flex-column"
                >
                  <Checkbox
                    checked={isChecked(checkbox.key)}
                    onChange={() => handleSelection(checkbox.key)}
                  >
                    {checkbox.title}
                  </Checkbox>
                </div>
              ))}
		</>
	)
}
