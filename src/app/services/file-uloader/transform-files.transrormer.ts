import { FileEntityTransformed } from "./file-uploader.service";


export const transformFiles = (files: any[]): FileEntityTransformed[] => {
    const groupedData = files.reduce((acc, obj) => {
        const [name, group] = obj.name.split(" : ");
        
        const groupName = group ? group.trim() : name.trim();
    
        if (!acc[groupName]) {
            acc[groupName] = {
                name: groupName,
                entity: []
            };
        }
    
        acc[groupName].entity.push(obj);
        
        return acc;
    }, {});
    
    const result: FileEntityTransformed[] = Object.values(groupedData);
    
    return result
} 