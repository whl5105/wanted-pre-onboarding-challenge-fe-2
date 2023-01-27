/**\
 * @version 1.0.0
 * @file 원티드 프리온보딩 프론트엔드 챌린지 2차 - todo 문서 
 * @author suin choi
 * @see <a href="https://github.com/whl5105/wanted-pre-onboarding-challenge-fe-2" >https://github.com/whl5105/wanted-pre-onboarding-challenge-fe-2 </a>
 */

/**
	* Class to create a Todo Object 
	*/
class Todo{
	/**
	 * @param {Object} TodoInfo  Information about the todo 
	 */
	constructor(TodoInfo){
	/**
	 * @property {number} id  Todo id 
	 */
	this.id = TodoList.id
	/**
	 * @property {string} content Todo content
	 */
	this.content = TodoList.content
	/**
	 * @property {boolean} isCompleted Todo is complete
	 */
	this.isCompleted = TodoList.isCompleted
	/**
	 * @property {string} category Todo category
	 */
	this.category = TodoList.category
	/**
	 * @property {Tag[]} tags todo tag 
	 */
	this.tags = TodoList.tags
	}
}

/**
	* Class to create a Tag Object 
	*/
	class Tag{
		/**
		 * @param {Object} TagInfo  Information about the tag 
		 */
		constructor(TagInfo){
		/**
		 * @property {number} id Tag Id
		 */
		this.id = TagInfo.id
		/**
		 * @property {string} name Tag name
		 */
		this.name = TagInfo.name

		}
	}





/**
 * CREATE : 할일을 추가할 수 있습니다.[내용(content)없이 추가 불가능]
 * @param {Object} todoData 
 * @param {string}  todoData.content {@link Todo}.content
 * @param {boolean} todoData.isCompleted {@link Todo}.isCompleted
 * @param {string} todoData.category {@link Todo}.category
 * @param {Tag[]} todoData.tags {@link Todo}.tags
 */
function createTodo(todoData) {
	// content 없을경우 예외처리 
}

/**
 * READ : 모든 할일을 조회 할 수 있습니다.
 * @returns {Todo[]}
 */
function getAllTodo() {}

/**
 * READ : ID를 기반으로 특정 할 일을 조회할 수 있습니다.
 * @param {number} todoId  {@link Todo}.id
 * @returns {Todo} 
 */
function getTodo(todoId) {}

/**
 * UPDATE : ID를 제외한 모든 속성을 수정할 수 있습니다.
 * @param {number} todoId  {@link Todo}.id
 * @param {Object} todoData 
 * @param {string}  todoData.content {@link Todo}.content
 * @param {boolean} todoData.isCompleted {@link Todo}.isCompleted
 * @param {string} todoData.category {@link Todo}.category
 * @param {Tag[]} todoData.tags {@link Todo}.tags

 */
function updateTodo(todoId,todoData) {}

/**
 * UPDATE : 특정 할 일의 특정 태그를 수정할 수 있습니다.
 * @param {number} tagId {@link Tag}.id
 * @param {string} name {@link Tag}.name
 */
function updateTag(tagId,name) {}

/**
 * DELETE : ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
 * @param {number} todoId {@link Todo}.id
 */
function deleteTodo(todoId) {}

/**
 * DELETE : 모든 할 일을 제거할 수 있습니다.
 */
function deleteAllTodo() {}

/**
 * DELETE : 특정 할 일의 특정 태그를 삭제할 수 있습니다.
 * @param {number} todoId {@link Todo}.id
 * @param {number} tagId {@link Tag}.id
 */
function deleteTag(todoId,tagId) {}

/**
 * DELETE : 특정 할 일의 모든 태그를 제거할 수 있습니다.
 * @param {number} todoId {@link Todo}.id
 */
function deleteAllTag(todoId) {}


