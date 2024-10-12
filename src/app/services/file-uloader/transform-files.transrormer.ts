import { FileEntity, FileEntityTransformed } from "./file-uploader.service";


export const transformFiles = (files: any[]): FileEntityTransformed[] => {
    const groupedData = files.reduce((acc, obj) => {
        // Разделяем имя на название и группу
        const [name, group] = obj.name.split(" : ");
        
        // Если группа не указана, используем название как группу
        const groupName = group ? group.trim() : name.trim();
    
        // Проверяем, существует ли уже группа в аккумуляторе
        if (!acc[groupName]) {
            acc[groupName] = {
                name: groupName,
                entity: []
            };
        }
    
        // Добавляем объект в соответствующую группу
        acc[groupName].entity.push(obj);
        
        return acc;
    }, {});
    
    // Преобразуем объект в массив
    const result: FileEntityTransformed[] = Object.values(groupedData);
    
    console.log(result);
    return result
} 