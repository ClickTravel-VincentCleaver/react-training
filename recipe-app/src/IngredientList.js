import Ingredient from "./Ingredient";

function IngredientList(props) {

    return (
        <div className="IngredientList">
            <span>Ingredients:</span>
            {
                props.ingredients.map(function(ingredient, index){
                    return <Ingredient name={ingredient.name} key={ingredient.name} />
                })
            }
        </div>
    )
}

export default IngredientList;
